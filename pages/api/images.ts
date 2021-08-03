import fauna from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';

const {query} = fauna;
const client = new fauna.Client({secret: process.env.FAUNA_API_KEY});

export interface ImagesQueryResponse {
  after?: {
    id: string;
  };
  data: {
    data: {
      title: string;
      categorie: string;
      url: string;
    };
    ref: {
      id: string;
    }
  }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    const { url, title, categorie} = req.body;

    return client.query(
      query.Create(query.Collection('recipe'), {
        data: {
          title,
          categorie,
          url
        }
      })
    ) .then(() => {
      return res.status(201).json({success: true});
    })
    .catch( err =>
      res
        .status(501)
        .json({error: `Sorry something happened ${err.message}`})
      )
  }

  if (req.method === 'GET') {
    const { after } = req.query;

    const queryOptions = {
      size: 6,
      ...(after && { after: query.Ref(query.Collection('recipe'), after) }),
      
    };

    return client
      .query<ImagesQueryResponse>(
        query.Map(
          query.Paginate(
            query.Documents(query.Collection('recipe')),
            queryOptions
          ),
          query.Lambda('X', query.Get(query.Var('X')))
        )
      )
      .then(response => {
        const formattedData = response.data.map(item => ({
          ...item.data,
          id: item.ref.id,
        }));

        return res.json({
          data: formattedData,
          after: response.after ? response.after[0].id : null,
        });
      })
      .catch( err => {
        return res.status(400).json(err);
      });
  }

  return res.status(405).json({error: `Method '${req.method}' Not Allowed`})
}
import dbConnect from '../../../utils/dbConnection';

dbConnect()

export default async function(req, res) {
    console.log('req', req);
    const { method } = req;

    res.status(200).json({ success: true })
}
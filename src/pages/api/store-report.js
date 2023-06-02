import fsPromises from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {

    if (req.method === 'POST') {
        try {
            const dataFilePath = path.join(process.cwd(), 'reports/analysis.json');

            // Read the existing data from the JSON file
            const jsonData = await fsPromises.readFile(dataFilePath);
            const objectData = JSON.parse(jsonData);

            // Get the data from the request body
            const data = req.body;

            objectData.push(data);

            // Convert the object back to a JSON string
            const updatedData = JSON.stringify(objectData);

            // Write the updated data to the JSON file
            await fsPromises.writeFile(dataFilePath, updatedData);

            // Send a success response
            res.status(200).json({ message: 'Data stored successfully' });
        } catch (error) {
            console.error(error);
            // Send an error response
            res.status(500).json({ message: 'Error storing data:' + error.message });
        }
    }

}
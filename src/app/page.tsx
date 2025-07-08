import { db } from "~/server/db";
import GoogleDriveClone from "./drive-content";
import { files as filesScehma, folders as foldersSchema } from "~/server/db/schema";

export default async function MainPage() {
    const files= await db.select().from(filesScehma);
    const folders = await db.select().from(foldersSchema);
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Welcome to the Drive Tutorial</h1>
                <p className="text-gray-400 mb-4">This is a simple Google Drive clone built with Next.js and Drizzle ORM.</p>
                <p className="text-gray-400">Explore the features and learn how to manage files and folders.</p>
            </div>
        </div>
    );
}
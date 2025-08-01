import { db } from "~/server/db";
import { files_table as filesScehma, folders_table as foldersSchema } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const QUERIES = {
    getParentsForFolders: async function (folderId: number) {
        const parents = []
        let currentId: number | null = folderId;
        while (currentId !== null) {
            const folder = await db
                .selectDistinct()
                .from(foldersSchema)
                .where(eq(foldersSchema.id, currentId))
            if (!folder[0]) throw new Error(`Folder with ID ${currentId} not found`);
            parents.unshift(folder[0]);
            if (currentId === folder[0].parent) {
                break;
            }
            currentId = folder[0]?.parent;
        }
        return parents
    },
    getFiles: function (folderId: number) {
        return db
            .select()
            .from(filesScehma)
            .where(eq(filesScehma.parent, folderId));
    },
    getFolders: function (folderId: number) {
        return db
            .select()
            .from(foldersSchema)
            .where(eq(foldersSchema.parent, folderId));
    }
}



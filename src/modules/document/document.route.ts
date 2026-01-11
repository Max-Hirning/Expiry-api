import { FastifyInstance } from "fastify";
import { DocumentHandler } from "./document.handler.js";
import { teamParamsSchema } from "@/lib/validation/team/team.schema.js";
import {
    createDocumentBodySchema,
    createDocumentResponseSchema,
    documentParamsSchema,
    fetchDocumentsQuerySchema,
    fetchDocumentsResponseSchema,
    updateDocumentBodySchema,
    updateDocumentResponseSchema,
} from "@/lib/validation/document/document.schema.js";

export const createDocumentRoutes = (
    fastify: FastifyInstance,
    documentHandler: DocumentHandler
) => {
    fastify.get(
        "/:documentId",
        {
            schema: {
                tags: ["document"],
                summary: "Fetch document",
                params: teamParamsSchema,
                response: {
                    200: fetchDocumentsResponseSchema,
                },
            },
        },
        documentHandler.getDocument
    );

    fastify.delete(
        "/:documentId",
        {
            schema: {
                tags: ["document"],
                summary: "Delete document",
                params: teamParamsSchema,
                response: {
                    200: fetchDocumentsResponseSchema,
                },
            },
        },
        documentHandler.deleteDocument
    );

    fastify.get(
        "/",
        {
            schema: {
                tags: ["document"],
                summary: "Fetch documents",
                params: documentParamsSchema,
                querystring: fetchDocumentsQuerySchema,
                response: {
                    200: fetchDocumentsResponseSchema,
                },
            },
        },
        documentHandler.getDocuments
    );

    fastify.post(
        "/",
        {
            schema: {
                tags: ["document"],
                summary: "Create document",
                params: teamParamsSchema,
                body: createDocumentBodySchema,
                response: {
                    201: createDocumentResponseSchema,
                },
            },
        },
        documentHandler.createDocument
    );

    fastify.put(
        "/:documentId",
        {
            schema: {
                tags: ["document"],
                summary: "Update document",
                params: documentParamsSchema,
                body: updateDocumentBodySchema,
                response: {
                    200: updateDocumentResponseSchema,
                },
            },
        },
        documentHandler.updateDocument
    );
};

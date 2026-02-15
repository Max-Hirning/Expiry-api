import { FastifyInstance } from "fastify";
import { Actions } from "../auth/auth.types.js";
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
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.GET_DOCUMENT),
            ],
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
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.DELETE_DOCUMENT),
            ],
        },
        documentHandler.deleteDocument
    );

    fastify.get(
        "/",
        {
            schema: {
                tags: ["document"],
                summary: "Fetch documents",
                params: teamParamsSchema,
                querystring: fetchDocumentsQuerySchema,
                response: {
                    200: fetchDocumentsResponseSchema,
                },
            },
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.GET_DOCUMENTS),
            ],
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
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.CREATE_DOCUMENT),
            ],
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
            preHandler: [
                fastify.authorization,
                fastify.checkAccess(Actions.UPDATE_DOCUMENT),
            ],
        },
        documentHandler.updateDocument
    );
};

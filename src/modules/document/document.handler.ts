import { FastifyReply, FastifyRequest } from "fastify";
import { DocumentService } from "./document.service.js";
import { addDIResolverName } from "@/lib/awilix/awilix.js";
import { TeamParamsInput } from "@/lib/validation/team/team.schema.js";
import { FetchFilesQueryInput } from "@/lib/validation/file/file.schema.js";
import {
    CreateDocumentBodyInput,
    DocumentParamsInput,
    FetchDocumentsQueryInput,
    UpdateDocumentBodyInput,
} from "@/lib/validation/document/document.schema.js";

export type DocumentHandler = {
    getDocument: (
        request: FastifyRequest<{
            Params: DocumentParamsInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
    deleteDocument: (
        request: FastifyRequest<{
            Params: DocumentParamsInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
    getDocuments: (
        request: FastifyRequest<{
            Params: TeamParamsInput;
            Querystring: FetchDocumentsQueryInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
    createDocument: (
        request: FastifyRequest<{
            Params: TeamParamsInput;
            Body: CreateDocumentBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
    updateDocument: (
        request: FastifyRequest<{
            Params: DocumentParamsInput;
            Body: UpdateDocumentBodyInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
    getFiles: (
        request: FastifyRequest<{
            Params: DocumentParamsInput;
            Querystring: FetchFilesQueryInput;
        }>,
        reply: FastifyReply
    ) => Promise<void>;
};

export const createDocumentHandler = (
    documentService: DocumentService
): DocumentHandler => {
    return {
        getDocument: async (request, reply) => {
            const { params, user } = request;

            const data = await documentService.getDocument({
                params,
                initiator: user,
            });

            return reply.send(data);
        },

        deleteDocument: async (request, reply) => {
            const { params, user } = request;

            const data = await documentService.deleteDocument({
                params,
                initiator: user,
            });

            return reply.send(data);
        },

        getDocuments: async (request, reply) => {
            const { query, params, user } = request;

            const data = await documentService.getDocuments({
                query,
                params,
                initiator: user,
            });

            return reply.send(data);
        },

        createDocument: async (request, reply) => {
            const { body, params, user } = request;

            const data = await documentService.createDocument({
                body,
                params,
                initiator: user,
            });

            return reply.send(data);
        },

        updateDocument: async (request, reply) => {
            const { params, body, user } = request;

            const data = await documentService.updateDocument({
                params,
                body,
                initiator: user,
            });

            return reply.send(data);
        },

        getFiles: async (request, reply) => {
            const { params, query, user } = request;

            const data = await documentService.getFiles({
                params,
                query,
                initiator: user,
            });

            return reply.send(data);
        },
    };
};

addDIResolverName(createDocumentHandler, "documentHandler");

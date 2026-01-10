import { EnvConfig } from "./env.type.js";
import { FastifyBaseLogger } from "fastify";
import { PrismaClient } from "@prisma/client/extension";
import { TeamService } from "@/modules/team/team.service.js";
import { TeamHandler } from "@/modules/team/team.handler.js";
import { AuthService } from "@/modules/auth/auth.service.js";
import { AuthHandler } from "@/modules/auth/auth.handler.js";
import { UserHandler } from "@/modules/user/user.handler.js";
import { UserService } from "@/modules/user/user.service.js";
import { ApplicationService } from "@/modules/application/application.service.js";
import { ApplicationHandler } from "@/modules/application/application.handler.js";
import { UserRepository } from "@/database/master/repositories/user/user.repository.js";
import { TeamRepository } from "@/database/master/repositories/team/team.repository.js";
import { DocumentRepository } from "@/database/team/repositories/document/docuement.repository.js";

export type Cradle = {
    log: FastifyBaseLogger;
    prisma: PrismaClient;
    config: EnvConfig;

    teamService: TeamService;
    teamHandler: TeamHandler;

    teamRepository: TeamRepository;

    authService: AuthService;
    authHandler: AuthHandler;

    applicationService: ApplicationService;
    applicationHandler: ApplicationHandler;

    documentRepository: DocumentRepository;

    userRepository: UserRepository;
    userHandler: UserHandler;
    userService: UserService;
};

import { UserRoles, UserStatuses } from "@/database/master/generated/index.js";

const toggleStatuses: Record<UserStatuses, UserStatuses> = {
    [UserStatuses.ACTIVE]: UserStatuses.DEACTIVATED,
    [UserStatuses.DEACTIVATED]: UserStatuses.ACTIVE,
    [UserStatuses.INVITED]: UserStatuses.INVITED,
};

const invitedRoles: Record<UserRoles, UserRoles | undefined> = {
    [UserRoles.SUPER_ADMIN]: UserRoles.SUB_ADMIN,
    [UserRoles.SUB_ADMIN]: undefined,
    [UserRoles.USER]: UserRoles.USER,
};

export { toggleStatuses, invitedRoles };

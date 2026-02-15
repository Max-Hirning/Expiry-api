import { addDays } from "date-fns";
import {
    DocumentStatuses,
    RiskLevel,
    Prisma as TeamPrisma,
} from "@/database/team/generated/index.js";
import {
    Prisma as MasterPrisma,
    UserRoles,
    UserStatuses,
} from "@/database/master/generated/index.js";

const users: Omit<MasterPrisma.UserCreateInput, "password">[] = [
    {
        fullName: "John Doe #1",
        email: "johndoe1@gmail.com",
        phoneNumber: "+1872630976",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #2",
        email: "johndoe2@gmail.com",
        phoneNumber: "+1872630977",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #3",
        email: "johndoe3@gmail.com",
        phoneNumber: "+1872630978",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #4",
        email: "johndoe4@gmail.com",
        phoneNumber: "+1872630979",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #5",
        email: "johndoe5@gmail.com",
        phoneNumber: "+1872630980",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #6",
        email: "johndoe6@gmail.com",
        phoneNumber: "+1872630981",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #7",
        email: "johndoe7@gmail.com",
        phoneNumber: "+1872630982",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #8",
        email: "johndoe8@gmail.com",
        phoneNumber: "+1872630983",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #9",
        email: "johndoe9@gmail.com",
        phoneNumber: "+1872630984",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #10",
        email: "johndoe10@gmail.com",
        phoneNumber: "+1872630985",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #11",
        email: "johndoe11@gmail.com",
        phoneNumber: "+1872630986",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #12",
        email: "johndoe12@gmail.com",
        phoneNumber: "+1872630987",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #13",
        email: "johndoe13@gmail.com",
        phoneNumber: "+1872630988",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #14",
        email: "johndoe14@gmail.com",
        phoneNumber: "+1872630989",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #15",
        email: "johndoe15@gmail.com",
        phoneNumber: "+1872630990",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #16",
        email: "johndoe16@gmail.com",
        phoneNumber: "+1872630991",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #17",
        email: "johndoe17@gmail.com",
        phoneNumber: "+1872630992",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #18",
        email: "johndoe18@gmail.com",
        phoneNumber: "+1872630993",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #19",
        email: "johndoe19@gmail.com",
        phoneNumber: "+1872630994",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #20",
        email: "johndoe20@gmail.com",
        phoneNumber: "+1872630995",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #21",
        email: "johndoe21@gmail.com",
        phoneNumber: "+1872630996",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #22",
        email: "johndoe22@gmail.com",
        phoneNumber: "+1872630997",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #23",
        email: "johndoe23@gmail.com",
        phoneNumber: "+1872630998",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #24",
        email: "johndoe24@gmail.com",
        phoneNumber: "+1872630999",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #25",
        email: "johndoe25@gmail.com",
        phoneNumber: "+1872631000",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #26",
        email: "johndoe26@gmail.com",
        phoneNumber: "+1872631001",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #27",
        email: "johndoe27@gmail.com",
        phoneNumber: "+1872631002",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #28",
        email: "johndoe28@gmail.com",
        phoneNumber: "+1872631003",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #29",
        email: "johndoe29@gmail.com",
        phoneNumber: "+1872631004",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
    {
        fullName: "John Doe #30",
        email: "johndoe30@gmail.com",
        phoneNumber: "+1872631005",
        role: UserRoles.USER,
        status: UserStatuses.ACTIVE,
    },
];

const teams: MasterPrisma.TeamCreateInput[] = Array.from(
    { length: 10 },
    (_, index) => ({
        name: `Team #${index + 1}`,
    })
);

const tags: TeamPrisma.TagCreateInput[] = Array.from(
    { length: 10 },
    (_, index) => ({
        tag: `Tag #${index + 1}`,
    })
);

const allStatuses = Object.values(DocumentStatuses);

const allRiskLevels = Object.values(RiskLevel);

const getRandomDocumentRiskLevel = (status: DocumentStatuses) => {
    if (
        status === DocumentStatuses.ACTIVE ||
        status === DocumentStatuses.ARCHIVED ||
        status === DocumentStatuses.NEEDS_REVIEW
    ) {
        return allRiskLevels[Math.floor(Math.random() * allRiskLevels.length)];
    }

    return null;
};

const documents: TeamPrisma.DocumentCreateInput[] = Array.from(
    { length: 10 },
    (_, index) => {
        const status =
            allStatuses[Math.floor(Math.random() * allStatuses.length)];

        return {
            name: `Document #${index + 1}`,
            status,
            expiresAt: addDays(new Date(), index + 1),
            riskLevel: getRandomDocumentRiskLevel(status),
        };
    }
);

const images = [
    "data:image/jpeg;base64,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BSwMkjhp4ImSe+xkbGtfy7zQLHQ80EfDeE6Gnk7aCkp4pOT2xsDhfext3fJBkWUEQldOI2CVzQ10oaM5YNml25A6IItTw9SSGZ0lNA8zBolJjYe0DCCzPp3rFrbX2sEEam4Ow+N7JI6KlY9hDmvbDEHNcDcEEDQgoMnRUEUIeIY2Rh73PflaG5pHe8423cbC5QHUERlFQY2GUNLBLlGcMJuWh29r62Qep6ON+fOxrs7cj7gHMzXunqO87TxKC+ghVWEwSu7R8THPtbPYB2X8pcNSN9NtUFxtBEIuwEUfZWI7LK3JlO4yWtY6oPNFhcMJLoomMcQAXADMWjYE72FzYbC6CRDC1gysAaNTYCwuSSfUknzQUELQ4vDRmIa0utqWtLi0E9AXO/mKC4gICAgICAgjIJDNggqgICAgICAgICAgICAgICAgICAgICAgICAgICCMgkM2CCqAgICAgICAgICAgICAgICAgICAgICAgICAgIIyCQzYIKoCAgICAgICAgICAgICAgICAgICAgICAgICAgjIJDdggqgICAgICAgICAgICAgICAgICAgICAgICAgICCMgo3YIKoCAgICAgICAgICAgICAgICAgICAgICAgICAgsIP/9k=",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIlRZQfdIMa1D8Wy-cqT3GKpvFdgxDrAq9Eg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtHcf8iUsoFoAYsnId87YIfeiXJP160lgmg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiURnzcf4qSb6LtzRk3GuhgV8o9XsjCUREMw&s",
];

export { users, teams, tags, documents, images };

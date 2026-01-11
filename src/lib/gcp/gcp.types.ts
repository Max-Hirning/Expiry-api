enum FileTypes {
    AVATAR,
    LOGO,
    DOCUMENT,
}

type ConfigureFileKeyArg =
    | {
          type: FileTypes.AVATAR;
          userId: string;
      }
    | {
          type: FileTypes.LOGO;
          teamId: string;
      }
    | {
          type: FileTypes.DOCUMENT;
          teamId: string;
          documentId: string;
      };

export { FileTypes };

export type { ConfigureFileKeyArg };

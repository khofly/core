export type ITiers = 1 | 2 | 3 | 4 | 5;

export interface ITierLimits {
  cost: number;
  isOneTime: boolean;

  canCreateTeam: boolean;
  teamNoLimit: number;
  teamLenLimit: number;

  // docs limits
  docNoLimit: number;
  docLenLimit: number;

  // meet limits
}

export const TIER_LIMITS: Record<ITiers, ITierLimits> = {
  1: {
    cost: 0,
    isOneTime: true,

    canCreateTeam: true,
    teamNoLimit: 1,
    teamLenLimit: 5,

    // docs limits
    docNoLimit: 100,
    docLenLimit: 50000,
  },
  2: {
    cost: 5,
    isOneTime: true,

    canCreateTeam: true,
    teamNoLimit: 1,
    teamLenLimit: 10,

    // docs limits
    docNoLimit: 150,
    docLenLimit: 75000,
  },
  3: {
    cost: 10,
    isOneTime: true,

    canCreateTeam: true,
    teamNoLimit: 2,
    teamLenLimit: 10,

    // docs limits
    docNoLimit: 150,
    docLenLimit: 75000,
  },
  4: {
    cost: 15,
    isOneTime: true,

    canCreateTeam: true,
    teamNoLimit: 2,
    teamLenLimit: 15,

    // docs limits
    docNoLimit: 200,
    docLenLimit: 100000,
  },
  5: {
    cost: 20,
    isOneTime: true,

    canCreateTeam: true,
    teamNoLimit: 5,
    teamLenLimit: 20,

    // docs limits
    docNoLimit: 200,
    docLenLimit: 100000,
  },
};

export const getTierData = (tier: ITiers, theme: any) => {
  switch (tier) {
    case 1:
      return {
        label: "Tier 1",
        short: "T1",
        color: theme.colors.gray["2"],
        mColor: "gray.2",
      };
    case 2:
      return {
        label: "Tier 2",
        short: "T2",
        color: theme.colors.blue["4"],
        mColor: "blue.4",
      };
    case 3:
      return {
        label: "Tier 3",
        short: "T3",
        color: theme.colors.blue["6"],
        mColor: "blue.6",
      };
    case 4:
      return {
        label: "Tier 4",
        short: "T4",
        color: theme.colors.grape["6"],
        mColor: "grape.6",
      };
    case 5:
      return {
        label: "Tier 5",
        short: "T5",
        color: theme.colors.pink["6"],
        mColor: "pink.6",
      };

    default:
      return {
        label: "Tier 1",
        short: "T1",
        color: theme.colors.gray["2"],
        mColor: "gray.2",
      };
  }
};

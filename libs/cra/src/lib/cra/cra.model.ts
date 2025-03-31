export type Cra = {
  agentCodeName:string;
  imputations:Imputation[];
  description?:string;
}

export type MissionName = 'Holiday' | 'Mission 1' | 'Mission 2' | 'Mission 3';

export type Imputation = {
  date: Date;
  cssClassName: string;
  missionName: MissionName;
}

export type Agent = {
  id: number;
  name: string;
  agentCodeName: string; // identifier path parameter for the agent
}

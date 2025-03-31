export type Cra = {
  agentCodeName:string;
  missionNames?:MissionName[];
  imputations:Imputation[];
  description?:string;
  completed?:boolean;
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
  agentCodeName: string;
}

export interface ParentData {
    parentField1: string;
    parentField2: string;
    parentHiddenField1: string;
    children: ChildData[];
    extraData: ExtraData;
};

export interface ChildData {
    id: number;
    childField1: string;
    childField2: string;
    childHiddenField1: string;
    customField: string;
};

export interface ExtraData {
  role: string;
  level: number;
  name: string;
}

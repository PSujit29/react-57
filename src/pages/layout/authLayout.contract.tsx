import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface ISidePanel {
  title: string;
  children: ReactNode;
}

export interface IAuthLayoutOutletContext {
  sidePanel: ISidePanel;
  setSidePanel: Dispatch<SetStateAction<ISidePanel>>;
}

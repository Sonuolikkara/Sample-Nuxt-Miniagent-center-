export type AgentStatus = "Available" | "Busy" | "Offline" ;

export interface Agent {
    id: number;
    name: string;
    email: string;
    status: AgentStatus;
}
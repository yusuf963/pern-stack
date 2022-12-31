export interface Itodo {
    id: string;
    description: string;
    completed: boolean;
    created_at: string | null;

}

export interface Ifetch {
    result: Itodo[];
    message: string;
    success: boolean;

}

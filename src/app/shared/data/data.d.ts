declare interface Player {
    id: number;
    first_name: string;
    height_feet?: number;
    height_inches?: number;
    last_name: string,
    position: string;
    weight_pounds?: number;
    picture?: string;
    team: Team;
}

declare interface Team {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

declare interface MetaInfo {
    current_page: number;
    next_page: number;
    per_page: number;
    total_count: number;
    total_pages: number;
}

declare interface ApiPlayersResponse<T> {
    data: Array<T>;
    meta: MetaInfo;
}


type PlayersAndTeams = Player & Team;



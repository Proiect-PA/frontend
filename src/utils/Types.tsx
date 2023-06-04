
export type FormFields = {
    label: string;
    valueType: string;
    required: boolean;
}

export type UserType = {
    firstname: string;
    lastname: string;
    id: string;
    email: string;
    username: string;
}

export type MusicLayoutProps = {
    artists: (artistType & enhancedType)[],
    tracks: (trackType & enhancedType)[],
    albums: (albumType & enhancedType)[]
}

export type credentialsType = {
    email: string;
    password: string;
}

export type enhancedType = {
    enhanced?: boolean;
}

export type artistType = {
    name: string;
}

export type genreType ={
    name: string;
}


export type trackType ={
    name: string;
    album: albumType;
}

export type albumType ={
    title: string;
    artist: artistType;
    genres: genreType[];
}


export type decodedTokenType = {
    sub: string;
    name: string;
    iat: number;
}
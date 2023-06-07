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
    id: string;
    name: string;
}

export type genreType = {
    name: string;
}


export type trackType = {

    id: string;
    name: string;
    album: albumType;
}

export type albumType = {

    id: string;
    title: string;
    artist: artistType;
    genre: genreType;
}


export type decodedTokenType = {
    sub: string;
    name: string;
    iat: number;
}
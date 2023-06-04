import AlbumsLibrary from "./AlbumsLibrary";
import {Layout} from "antd";
import {MusicLayoutProps} from "../utils/Types";
import ArtistsLibrary from "./ArtistsLibrary";
import TracksLibrary from "./TracksLibrary";
import {colorBgPrimary, colorLayoutOnTop} from "../utils/Utils";

const {Content, Sider} = Layout;


export default function MusicLayout({artists, albums, tracks}: MusicLayoutProps) {
    return (
        <Layout className={`text-white`}>
            <Sider theme={"light"} className={`text-white m-2`} width={400}>
                <AlbumsLibrary albums={albums}/>
            </Sider>
            <Content className={`bg-[${colorLayoutOnTop}] text-slate-200 p-2 m-2`}>
                <ArtistsLibrary artists={artists}/>
                <TracksLibrary tracks={tracks}/>
            </Content>
        </Layout>
    )
}
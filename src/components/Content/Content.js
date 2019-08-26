import React, {useState} from "react";
import Masonry from "react-masonry-component";
import Widget from "./Widget/Widget";
import "./Content.scss";
import Links from "./Widgets/Links/Links";
import Accordion from "./Accordion/Accordion";
import Events from "./Widgets/Events/Events";
import News from "./Widgets/News/News";
import linksData from "../../mockData/links-data.json";
import MyLinksData from "../../mockData/own-links-data.json";
import ManualLinksData from "../../mockData/manual-links-data.json";
import BlogPostData from "../../mockData/blog-post-data";
import Info from "./Widgets/Info/Info";
import Polls from "./Widgets/Polls/Polls";
import Groups from "./Widgets/Grops/Groups";
import PhoneSearch from "./PhoneSearch/PhoneSearch";
import MicroBlog from "./Widgets/MicroBlog/MicroBlog";
import Blogs from "./Widgets/Blogs/Blogs";
import AddWidgetButton from "./Widgets/AddWidgetButton/AddWidgetButton";

const Content = () => {
    const [rerender, setRerenderLayout] = useState(1);
    return <div className="content container">
        <Masonry options={{
            horizontalOrder: true, columnWidth: ".grid-sizer", gutter: ".gutter-sizer",
            itemSelector: ".grid-block",
            percentPosition: true
        }}>
            <div className="grid-sizer"></div>
            <div className="gutter-sizer"></div>

            {/* ---- Widgets list starts ---- */}

            <Accordion className="grid-block"
                firstActiveItem={1}
                singleOpen={true}
                setRerenderLayout={setRerenderLayout}/>

            <Widget type="links" title="Direct Naar" className="grid-block">
                <Links data={linksData}/>
            </Widget>

            <PhoneSearch className="grid-block"/>

            <Widget className="grid-block" type="events" title="EVENEMENTEN" showMore="Meer evenementen">
                <Events/>
            </Widget>

            <Widget type="blog" title="BLOGS" className="grid-block" showMore="Meer blogs">
                <Blogs posts={BlogPostData.posts}/>
            </Widget>

            <Widget type="blog" title="MICROBLOG" className="grid-block" showMore="Toon meer">
                <MicroBlog/>
            </Widget>

            <Widget className="grid-block" type="events" title="NIEUWS" showMore="Meer nieuws">
                <News/>
            </Widget>

            <Widget type="info" title="KWALITEITSHANDBOEK" className="grid-block" showMore="Naar kwaliteitshandboek">
                <Info data={ManualLinksData}/>
            </Widget>

            <Widget className="grid-block" type="groups" title="MIJN GROEPEN" showMore="Meer groepen">
                <Groups/>
            </Widget>

            <div className="grid-block">
                <AddWidgetButton />
            </div>

            <Widget type="info" title="PEILINGEN" className="grid-block">
                <Polls/>
            </Widget>

            <div className="grid-block"></div>
            <div className="grid-block"></div> {/*added to fix widgets position*/}

            <Widget type="links" title="MIJN LINKS" className="grid-block">
                <Links data={MyLinksData}/>
            </Widget>

        </Masonry>
    </div>;
};

export default Content;
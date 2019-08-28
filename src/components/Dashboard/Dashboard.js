import React, {useState, useEffect, Fragment} from "react";
import Masonry from "react-masonry-component";
import Widget from "./Widget/Widget";
import "./Dashboard.scss";
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

const Dashboard = () => {
    const rerender = useState(1)[1];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const isSmallScreen = (windowWidth < 1180); //For small screens fixes

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
                rerender={rerender} />

            <Widget type="links" title="Direct Naar" className="grid-block" rerender={rerender}>
                <Links data={linksData} />
            </Widget>

            <PhoneSearch className="grid-block" />

            <Widget className="grid-block long" type="events" title="EVENEMENTEN" showMore="Meer evenementen" rerender={rerender}>
                <Events />
            </Widget>

            <Widget type="blog" title="BLOGS" className="grid-block" showMore="Meer blogs" rerender={rerender}>
                <Blogs posts={BlogPostData.posts} />
            </Widget>

            <Widget type="blog" title="MICROBLOG" className="grid-block" showMore="Toon meer" rerender={rerender}>
                <MicroBlog />
            </Widget>

            <Widget className="grid-block" type="events" title="NIEUWS" showMore="Meer nieuws" rerender={rerender}>
                <News />
            </Widget>

            <Widget type="info" title="KWALITEITSHANDBOEK" className="grid-block long" showMore="Naar kwaliteitshandboek" rerender={rerender}>
                <Info data={ManualLinksData} />
            </Widget>

            <Widget className="grid-block long" type="groups" title="MIJN GROEPEN" showMore="Meer groepen" rerender={rerender}>
                <Groups />
            </Widget>

            {!isSmallScreen && <div className="grid-block"><AddWidgetButton /></div>}

            <Widget type="info" title="PEILINGEN" className="grid-block" rerender={rerender}>
                <Polls />
            </Widget>

            {!isSmallScreen &&
            <Fragment>
                <div className="grid-block"></div>
                <div className="grid-block"></div>
            </Fragment>}

            <Widget type="links" title="MIJN LINKS" className="grid-block" rerender={rerender}>
                <Links data={MyLinksData} />
            </Widget>

            {isSmallScreen && <div className="grid-block"></div>}
            {isSmallScreen && <div className="grid-block"><AddWidgetButton /></div>}

        </Masonry>
    </div>;
};

export default Dashboard;

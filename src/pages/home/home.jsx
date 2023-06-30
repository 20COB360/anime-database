import Slider from "../../components/slider-container/slider";
import Card from "../../components/card/card";
import Comment from "../../components/comment/comment";
import SearchSidebarWrapper from "../../components/search-sidebar/search-sidebar-wrapper";
import './home.scss'
function Home() {
    return (
        <>
            <SearchSidebarWrapper />
            <Slider />
            <div className="wrapper">
                <div className="card-box">
                    <h1>Top Anime This Week</h1>
                    <Card
                        cardimg="beyond-the-boundary.png"
                        cardtitle="beyondtheboundary.png"
                        cardpng="mirai.png"
                    />
                    <Card
                        cardimg="tokyoghoul.jpg"
                        cardtitle="tokyoghoul.png"
                        cardpng="kaneki.png"
                    />
                    <Card
                        cardimg="naruto-bg.jpg"
                        cardtitle="narutotitle.png"
                        cardpng="naruto.png"
                    />
                    <Card
                        cardimg="dragonball.jpg"
                        cardtitle="dragonball.png"
                        cardpng="goku.png"
                    />
                    <Card
                        cardimg="hod.jpg"
                        cardtitle="hod.png"
                        cardpng="hod.png"
                    />
                    <Card
                        cardimg="fate-unlimited-blade-works.jpg"
                        cardtitle="fate-unlimited-blade-works.png"
                        cardpng="fate-unlimited-blade-works.png"
                    />
                    <Card
                        cardimg="fate-heavens-feel.jpg"
                        cardtitle="fate-heavens-feel.png"
                        cardpng="fate-heavens-feel.png"
                    />
                    <Card
                        cardimg="fate-grand-order.jpg"
                        cardtitle="fate-grand-order.png"
                        cardpng="fate-grand-order.png"
                    />
                    <Card
                        cardimg="fate-unlimited-blade-works.jpg"
                        cardtitle="fate-unlimited-blade-works.png"
                        cardpng="fate-unlimited-blade-works.png"
                    />
                    <Card
                        cardimg="fate-heavens-feel.jpg"
                        cardtitle="fate-heavens-feel.png"
                        cardpng="fate-heavens-feel.png"
                    />
                </div>

                <div className="comments-box">
                    <h1>Top Comments This Week</h1>
                    <Comment
                        anime_name="Weathering with you"
                        comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dignissimos quis asperiores eveniet ipsum doloribus placeat ullam commodi reprehenderit numquam, in deserunt quasi rem enim pariatur, obcaecati debitis vero expedita ad? Enim ratione quia autem vel quas! Provident, perspiciatis esse? Praesentium itaque aperiam!"
                        cover_image="p_weathering with you.jpg"
                    />
                    <Comment
                        anime_name="I want to eat your pancreas"
                        comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dignissimos quis asperiores eveniet ipsum doloribus placeat ullam commodi reprehenderit numquam, in deserunt quasi rem enim pariatur, obcaecati debitis vero expedita ad? Enim ratione quia autem vel quas! Provident, perspiciatis esse? Praesentium itaque aperiam, dolore minima exercitationem suscipit fugiat ipsum eligendi ratione quasi."
                        cover_image="p_i want to eat your pancreas.jpg"
                    />
                    <Comment
                        anime_name="A Silent Voice"
                        comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dignissimos quis asperiores eveniet ipsum doloribus placeat ullam commodi reprehenderit numquam, in deserunt quasi rem enim pariatur, obcaecati debitis vero expedita ad? Enim ratione quia autem vel quas! Provident, perspiciatis esse?"
                        cover_image="p_a silent voice.jpg"
                    />
                    <Comment
                        anime_name="A Whisker Away"
                        comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dignissimos quis asperiores eveniet ipsum doloribus placeat ullam commodi reprehenderit numquam, in deserunt quasi rem enim pariatur, obcaecati debitis vero expedita ad? Enim ratione quia autem vel quas! Provident, perspiciatis esse?"
                        cover_image="p_A whisker Away.jpg"
                    />
                </div>
            </div>
        </>
    );
}
export default Home;
import "./Friendships.css";
import f_artical from "../images/blog/first_article.webp";
import s_artical from "../images/blog/second_article.webp";
import t_artical from "../images/blog/third_article.webp";

function Friendships() {
  return (
    <div className="Friendships mt-5">
      <h2>Friendships are made on Meetup</h2>
      <p className="mt-3">
        Since 2002, members have used Meetup to make new friends, meet
        like-minded people, spend time on hobbies, and connect with locals over
        shared interests. Learn how.
      </p>
      <div className="frienship-main">
        <a className="frienship_sec" href="#">
          <img className="blog_image" src={f_artical} alt="new_york" height="100%" width="100%"/>
          <h3 className="mt-3">I Used Meetup to Make Friends at Brunch</h3>
          <span className="des">
            New Jersey-based writer and college student Brianna Stryker wanted
            to meet friends in her hometown. Learn how she used Meetup to make
            connections by joining a Girls Night Out Meetup group.
          </span>
          <p className="read">Read more</p>
        </a>
        <a className="frienship_sec" href="#">
          <img className="blog_image" src={s_artical} alt="new_york"  height="100%" width="100%"/>
          <h3 className="mt-3">
            How to Turn Casual Connections into Close Friendships
          </h3>
          <span className="des">
            It's proven that close friendships are harder to make as an adult.
            But don't sweat it: here's what you can do to simplify the process.
          </span>
          <p className="read">Read more</p>
        </a>
        <a className="frienship_sec" href="#">
          <img className="blog_image" src={t_artical} alt="new_york"  height="100%" width="100%"/>
          <h3 className="mt-3">Do You Have the “Right” Number of Friends?</h3>
          <span className="des">
            Studies from around the world have tried to help people answer this
            question. Learn about the three tiers of friendship and how to
            fulfill them.
          </span>
          <p className="read">Read more</p>
        </a>
      </div>
    </div>
  );
}
export default Friendships;

import ContentCard from './ContentCard';
import Style from './blog.module.css';

function Blog() {
  return (
    <div className={Style.container}>
      <div className={Style.main_content}>
        <h6>Practice Advice</h6>
        <h3>Featured Posts</h3>
      </div>
      <div className={Style.posts}>
        <ContentCard theImage="./Images/Random Image.png" />
        <ContentCard theImage="./Images/Random Image.png" />
        <ContentCard theImage="./Images/Random Image.png" />
      </div>
    </div>
  );
}

export default Blog;

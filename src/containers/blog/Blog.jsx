import './style.css'
import Article from '../../components/article/Article'
import {blog01, blog02, blog03, blog04, blog05} from './imports'

export default function Blog() {
    const articleData = [
        {
            imgUrl: blog01, 
            date: "Sep 26, 2021", 
            text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
        {
            imgUrl: blog02, 
            date: "Sep 26, 2021", 
            text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
        {
            imgUrl: blog03, 
            date: "Sep 26, 2021", 
            text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
        {
            imgUrl: blog04, 
            date: "Sep 26, 2021", 
            text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
        {
            imgUrl: blog05, 
            date: "Sep 26, 2021", 
            text: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
    ]

    return (
        <div className="gpt3__blog section__padding" id='blog'>
            <div className="gpt3__blog-header">
                <h1 className="gradient__text">
                    A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article 
                        imgUrl={articleData[0].imgUrl}
                        date={articleData[0].date}
                        text={articleData[0].text}
                    />
                </div>
                <div className="gpt3__blog-container_groupB">
                    {articleData
                        .filter((article, index) => index > 0)
                        .map(article => (
                            <Article 
                                imgUrl={article.imgUrl}
                                date={article.date}
                                text={article.text}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
};

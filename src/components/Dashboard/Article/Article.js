import React from 'react'
import ArticleList from './ArticleList/ArticleList'
import Card from "../../UI/Card/Card";
import styles from './Article.module.css'
import IcArticle from '../../../assets/ic_list_article.png'
import Button from '../../UI/Button/Button'

const Article = () => {
    return (
        <Card className={styles.article}>
            <div className={styles.card__header}>
                <div className={styles.card__headerLogo}>
                    <img src={IcArticle} alt="Icon List Article"/>
                    <h2>Data Artikel</h2>
                </div>
                <Button primary>
                    Tambah Artikel
                </Button>
            </div>
            <div className={styles.card__body}>
                <ArticleList/>
            </div>
        </Card>
    )
}

export default Article

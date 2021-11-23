import React, { useState } from "react";
import ArticleList from "./ArticleList/ArticleList";
import Card from "../../UI/Card/Card";
import styles from "./Article.module.css";
import IcArticle from "../../../assets/ic_list_article.png";
import Button from "../../UI/Button/Button";
import AddArticle from './AddArticle'

const Article = () => {
  const [addArticle, setAddArticle] = useState(false);

  const showAddArticle = () => {
    setAddArticle(!addArticle);
  };

  return (
    <Card className={styles.article}>
      <div className={styles.card__header}>
        <div className={styles.card__headerLogo}>
          <img src={IcArticle} alt="Icon List Article" />
          {addArticle ? <h2>Tambah Artikel</h2> : <h2>Data Artikel</h2>}
        </div>
        <Button onClick={showAddArticle} primary>
          {addArticle ? "Batal" : "Tambah Artikel"}
        </Button>
      </div>
      <div className={styles.card__body}>
        {addArticle ? <AddArticle/> : <ArticleList />}
      </div>
    </Card>
  );
};

export default Article;

import React from 'react';
import ChartPage from '../ChartPage/ChartPage';
//import Script from "react-inline-script";

function HomePage() {
  return (
      <>
    <main className="center" id="main">
    <div className="page-area">
        <article className="text-box">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae fuga similique doloremque ut. Iure provident obcaecati, vitae veritatis quam fuga corporis repellat atque. Nemo nam non voluptatem ducimus asperiores.</p>
        </article>

        <article className="text-box">
            <h1>Alerts</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores, distinctio facilis necessitatibus sequi cupiditate explicabo est assumenda rem ex! Nemo quos sit dolores excepturi odio blanditiis et magni doloribus?</p>
        </article>

        <article className="text-box">
            <h1>Results</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quidem non hic error magni cum culpa, molestiae in impedit provident animi aut excepturi ratione consequatur corrupti dignissimos quis quia ad!</p>
        </article>

        <article className="text-box">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae fuga similique doloremque ut. Iure provident obcaecati, vitae veritatis quam fuga corporis repellat atque. Nemo nam non voluptatem ducimus asperiores.</p>
        </article>
    </div>

    
</main>
    <h1>Chart</h1>
    <ChartPage/>
        
</>
        

  );
}

export default HomePage;

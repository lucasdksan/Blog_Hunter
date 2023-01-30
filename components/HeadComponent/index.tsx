import Head from "next/head";

export const HeadComponent = ()=>{
    return(
        <Head>
            <title>Blog Hunter</title>
            <meta name="author" content="Lucas da Silva" />
            <meta property="og:url" content="www.bloghunter.com.br" />
            <meta name="keywords" content="Blog Pessoal, Blog, Tecnologia, Develop, Programação" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="description" content="Blog pessoal para apresentar os projetos do desenvolvedor Lucas da Silva Leoncio" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Blog Hunter" />
            <meta property="og:description" content="Blog pessoal para apresentar os projetos do desenvolvedor Lucas da Silva Leoncio" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:site_name" content="Blog Hunter" />
            <meta property="og:image:alt" content="Boost yourself" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Blog Hunter" />
            <meta name="next-head-count" content="43" />
        </Head>
    );
}

export default HeadComponent;
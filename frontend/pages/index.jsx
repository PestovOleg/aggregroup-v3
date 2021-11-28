import RuLayout from "../components/ruLayout/ruLayout";
import Carousel from "../components/carousel/carousel";
import styles from "/styles/Home.module.scss";
import React, { useEffect, useState } from "react";
import LinkCard from "../components/linkCard/linkCard";
import Software from "../components/linkCard/svg/software";
import Hardware from "../components/linkCard/svg/hardware";
import Cloud from "../components/linkCard/svg/cloud";
import VendorCard from "../components/vendorCard/vendorCard";
import ClientCard from "../components/clientCard/clientCard";
import RequestForm from "../components/requestForm/requestForm";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCarousel, onScrollPage } from "../store/actions/common";
import { getRandomVendors, getVendors } from "../store/actions/vendor";
import { getRandomClients } from "../store/actions/client";
import { getLastNews } from "../store/actions/news";
import { wrapper } from "../store/store";
import Link from "next/link";

const Home = (props) => {
  useEffect(function onFirstMount() {
    function onScroll() {
      props.onScrollPage();
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  const randomCards = () => {
    return props.randomVendors.map((item, index) => (
      <VendorCard
        className={styles.vendorCard}
        key={index}
        src={item.url}
        name={item.name}
        slug={item.slug}
      ></VendorCard>
    ));
  };

  const randomClients = () => {
    return props.randomClients.map((item, index) => (
      <ClientCard
        key={index}
        src={item.src}
        name={item.name}
        url={item.url}
      ></ClientCard>
    ));
  };

  const lastNews = () => {
    return props.lastNews.map((item, index) => (
      <LinkCard
        key={index}
        className={styles.linkCard}
        caption={item.title}
        link={`/${item.slug}`}
        newsDate={item.added}
        news
      ></LinkCard>
    ));
  };
  return (
    <RuLayout>
      <div className={styles.carousel}>
        <Carousel data={props.carouselData} interval="5000" />
      </div>
      <section className={styles.backgroundGrey + " " + styles.section}>
        <div className={styles.container + " " + styles.sectionBlock}>
          <h6 className={styles.lowHeader + " " + styles.colorGreen}>
            О компании
          </h6>
          <h1 className={styles.bigHeader + " " + styles.colorBlack}>
            Мы предлагаем перспективные программные <br /> IT-решения, услуги и
            сервисы
          </h1>
          <div className={styles.wrapper}>
            <div
              className={styles.colorBlack + " " + styles.cardDescriptionLeft}
            >
              Команда AggreGroup обеспечивает техническую поддержку IT-решений
              на русском языке – даже для тех компаний, кто приобретал
              программные продукты наших вендоров через других поставщиков. Мы
              действуем в интересах заказчика и берем на себя решение полного
              спектра вопросов, связанных в том числе с лицензированием ПО и
              рекомендаций по использованию программных продуктов.
            </div>
            <div
              className={
                styles.backgroundWhite +
                " " +
                styles.colorBlack +
                " " +
                styles.cardDescriptionRight
              }
            >
              Наша миссия – обеспечивать конкурентоспособность российского
              бизнеса, создавая для него ИТ-инфраструктуру, которая базируется
              на функциональном программном обеспечении с низкой стоимостью
              владения.
            </div>
          </div>
          <div className={styles.trSection}></div>
        </div>
        <div className={styles.container}>
          <h6 className={styles.lowHeader + " " + styles.colorGreen}>
            С кем работаем
          </h6>
          <h1 className={styles.bigHeader + " " + styles.colorBlack}>
            Мы поставляем
          </h1>
          <div className={styles.wrapperLinkCard}>
            <LinkCard
              className={styles.linkCard}
              caption="Программное обеспечение"
              link="/ru"
            >
              <Software />
            </LinkCard>
            <LinkCard
              className={styles.linkCard}
              caption="Оборудование"
              link="/ru"
            >
              <Hardware />
            </LinkCard>
            <LinkCard
              className={styles.linkCard}
              caption="Облачная инфраструктура"
              link="/ru"
            >
              <Cloud />
            </LinkCard>
          </div>
          <div className={styles.randomVendorsBlock}>{randomCards()}</div>
        </div>
      </section>
      <section className={styles.backgroundGrey + " " + styles.sectionServices}>
        <div className={styles.container + " " + styles.sectionBlock}>
          <h6 className={styles.lowHeader + " " + styles.colorGreen}>
            Наши услуги
          </h6>
          <h1 className={styles.bigHeader + " " + styles.colorWhite}>
            Мы берем на себя реализацию комплексных проектов «под ключ»
          </h1>
          <div className={styles.wrapperServices}>
            <div className={styles.linkCardBlockWrapper}>
              <LinkCard
                className={styles.linkCard}
                caption="ИТ-аутсорсинг"
                link="/ru"
              ></LinkCard>
            </div>
            <div className={styles.linkCardBlockWrapper}>
              <LinkCard
                className={styles.linkCard}
                caption="Инфраструктурные проекты"
                link="/ru"
              ></LinkCard>
            </div>
            <div className={styles.linkCardBlockWrapper}>
              <LinkCard
                className={styles.linkCard}
                caption="Информационная безопасность"
                link="/ru"
              ></LinkCard>
            </div>
            <div className={styles.linkCardBlockWrapper}>
              <LinkCard
                className={styles.linkCard}
                caption="Проектная деятельность"
                link="/ru"
              ></LinkCard>
            </div>
            <div className={styles.linkCardBlockWrapper}>
              <LinkCard
                className={styles.linkCard}
                caption="Техподдержка"
                link="/ru"
              ></LinkCard>
            </div>
            <div className={styles.linkCardBlockWrapper}>
              <LinkCard
                className={styles.linkCard}
                caption="Заказная разработка"
                link="/ru"
              ></LinkCard>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.backgroundGrey}>
        <div className={styles.container + " " + styles.sectionBlock}>
          <h6 className={styles.lowHeader + " " + styles.colorGreen}>
            Для кого работаем
          </h6>
          <h1 className={styles.bigHeader + " " + styles.colorBlack}>
            Наши клиенты
          </h1>
          <div className={styles.randomVendorsBlock}>{randomClients()}</div>
        </div>
      </section>
      <div className={styles.trSection}></div>
      <section className={styles.backgroundGrey}>
        <div className={styles.container + " " + styles.sectionBlock}>
          <h6 className={styles.lowHeader + " " + styles.colorGreen}>
            Что происходит
          </h6>
          <div className={styles.newsH1Wrapper}>
            <h1 className={styles.bigHeader + " " + styles.colorBlack}>
              Новости
            </h1>
            <Link href="/news">
              <h6 className={styles.lowHeader + " " + styles.colorGreen}>
                Все новости &rarr;
              </h6>
            </Link>
          </div>
          <div className={styles.wrapperLinkCard}>{lastNews()}</div>
        </div>
      </section>
      <section className={styles.backgroundBlack + " " + styles.sectionBlock}>
        <RequestForm caption="Оставьте заявку"></RequestForm>
      </section>
    </RuLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(updateCarousel());
    await store.dispatch(getRandomVendors());
    await store.dispatch(getRandomClients());
    await store.dispatch(getLastNews());
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    updateCarousel: bindActionCreators(updateCarousel, dispatch),
    onScrollPage: bindActionCreators(onScrollPage, dispatch),
    getRandomVendors: bindActionCreators(getRandomVendors, dispatch),
    getRandomClients: bindActionCreators(getRandomClients, dispatch),
    getLastNews: bindActionCreators(getLastNews, dispatch),
  };
};

const mapStateToProps = (state) => ({
  carouselData: state.carousel.captions,
  randomVendors: state.vendors.randomVendors,
  randomClients: state.clients.randomClients,
  lastNews: state.news.lastNews,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

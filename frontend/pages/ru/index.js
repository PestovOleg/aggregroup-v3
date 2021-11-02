import RuLayout from "../../components/ruLayout/ruLayout";
import Carousel from "../../components/carousel/carousel";
import styles from "/styles/Home.module.scss";
import React, { useEffect, useState } from "react";
import LinkCard from "../../components/linkCard/linkCard";
import Software from "../../components/linkCard/svg/software";
import Hardware from "../../components/linkCard/svg/hardware";
import Cloud from "../../components/linkCard/svg/cloud";
import VendorRandom from "../../components/vendorRandom/vendorRandom";

export default function RuHome() {
  const carouselData = [
    {
      caption: "Программные ИТ-решения",
      text: "Поставка программного обеспечения и оборудования",
    },
    {
      caption: "Облачная инфраструктура",
      text: "Облачные решения",
    },
    {
      caption: "ИТ-аутсорсинг",
      text: "Сдача сотрудников в аренду",
    },
  ];

  return (
    <RuLayout>
      <div className={styles.carousel}>
        <Carousel data={carouselData} interval="5000" />
      </div>

      <section className={styles.backgroundGrey}>
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
              className={
                styles.text +
                " " +
                styles.colorBlack +
                " " +
                styles.cardDescriptionLeft
              }
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
            <LinkCard className={styles.linkCard} caption="Программное обеспечение" link="/ru">
              <Software />
            </LinkCard>
            <LinkCard className={styles.linkCard} caption="Оборудование" link="/ru">
              <Hardware />
            </LinkCard>
            <LinkCard className={styles.linkCard} caption="Облачная инфраструктура" link="/ru">
              <Cloud />
            </LinkCard>
          </div>
        </div>
        <VendorRandom/>
        <VendorRandom/>
        <VendorRandom/>
      </section>
    </RuLayout>
  );
}

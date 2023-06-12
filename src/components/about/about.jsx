import { colors } from "../../constants/color";

const About = () => {
  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <h3 style={{ color: colors.secondary, margin: "20px 0" }}>О нас :</h3>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              style={{ color: colors.secondary }}
              class="accordion-button darklight"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Стоимость доставки у нас
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show darkmode"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={{fontWeight: "bold", color: colors.gren}}>
              по г. Москве в пределах МКАД. : <br />
              с 9:00 до 23:00 - 350 руб. <br />
              с 23:00-01:00 + 250р; <br />
              с 01:00-09:00 + 450р. <br />
              Доставка по области Доставка зависит от километража, точную
              стоимость уточняйте.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              style={{ color: colors.secondary }}
              class="accordion-button collapsed darklight"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            О нас :
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse darkmode"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body"  style={{fontWeight: "bold", color: colors.gren}}>
              Интернет-магазин «Rosebudflowers» по праву считается одним из
              лучших интернет-магазинов столице России У нас всегда свежие цветы
              и богатый выбор готовых букетов. Мы доставляем цветы семь дней в
              неделю. Мы работаем на Рижском рынке уже неcколько лет и наши
              букеты по праву снискали славу у покупателей. Сделав у нас заказ
              на цветы хотя бы один раз, вы вернетесь к нам снова. Нас
              рекомендуют своим друзьям. Наш магазин работает круглосуточно. Вы
              можете заказать доставку дизайнерских букетов из живых цветов в
              Москве по любому адресу: на дом или в офис получателю.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              style={{ color: colors.secondary }}
              class="accordion-button collapsed darklight"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            О нас :
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse darkmode"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={{fontWeight: "bold", color: colors.gren}}>
              В регулярно обновляемом каталоге компании представлено более 200
              цветочных композиций. «Rosebudflowers» полностью гарантирует
              безупречное качество доставляемых букетов: наличие только свежих
              цветов в составе, полное соответствие изображению в каталоге,
              высокое мастерство исполнения. Наши продукция соответствуют любому
              вашему настроению и поводу их вручения: воздушные гортензии,
              экзотические орхидеи, благородные каллы, нежные ромашки… И,
              конечно, какое женское сердце устоит перед бархатом 101 розы?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

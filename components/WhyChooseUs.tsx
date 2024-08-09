"use client";
import {
  SwatchBook,
  HandHeart,
  ShieldCheck,
  Speech,
  Banknote,
} from "lucide-react";
import Icon from "./Icon";

const WhyChooseUs = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-center text-lg font-semibold mb-8">
          Чому нас обирають
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Icon
              icon={SwatchBook}
              size={100}
              className="w-12 h-12 mb-4  text-red-500"
            />
            <h3 className="text-md font-semibold">Широкий асортимент</h3>
            <p className="text-gray-600">
              Ми пропонуємо великий вибір меблів для будь-яких кімнат та стилів
              інтер’єру.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Icon
              icon={HandHeart}
              size={100}
              className="w-12 h-12 mb-4 text-red-500"
            />
            <h3 className="text-md font-semibold">Індивідуальний підхід</h3>
            <p className="text-gray-600">
              Ми завжди готові надати персональні поради та створити меблі на
              замовлення.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Icon
              icon={ShieldCheck}
              size={100}
              className="w-12 h-12 mb-4  text-red-500"
            />
            <h3 className="text-md font-semibold">Гарантія якості</h3>
            <p className="text-gray-600">
              Ми завжди готові гарантувати якість і довговічність нашої
              продукції.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Icon
              icon={Banknote}
              size={100}
              className="w-12 h-12 mb-4  text-red-500"
            />
            <h3 className="text-md font-semibold">Доступність</h3>
            <p className="text-gray-600">
              Ми пропонуємо конкурентоспроможні ціни та знижки.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Icon
              icon={Speech}
              size={100}
              className="w-12 h-12 mb-4 text-red-500"
            />
            <h3 className="text-md font-semibold">Професійна консультація</h3>
            <p className="text-gray-600">
              Наші експерти завжди готові надати експертну допомогу у виборі
              меблів.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

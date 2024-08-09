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
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold mb-10">
        Чому нас обирають
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex">
          <Icon
            icon={SwatchBook}
            size={100}
            className="w-24 h-24 mr-4 text-red-500 stroke-1"
          />
          <div>
            <h3 className="text-lg font-semibold mb-2">Широкий асортимент</h3>
            <p className="text-gray-700">
              Ми пропонуємо великий вибір меблів для будь-яких кімнат та стилів
              інтер’єру.
            </p>
          </div>
        </div>
        <div className="flex">
          <Icon
            icon={HandHeart}
            size={100}
            className="w-24 h-24 mr-4 text-red-500 stroke-1"
          />
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Індивідуальний підхід
            </h3>
            <p className="text-gray-700">
              Ми завжди готові врахувати ваші побажання та створити меблі на
              замовлення.
            </p>
          </div>
        </div>
        <div className="flex">
          <Icon
            icon={ShieldCheck}
            size={100}
            className="w-24 h-24 mr-4 text-red-500 stroke-1"
          />
          <div>
            <h3 className="text-lg font-semibold mb-2">Гарантія якості</h3>
            <p className="text-gray-700">
              Ми завжди готові врахувати ваші побажання та створити меблі на
              замовлення.
            </p>
          </div>
        </div>
        {/* Обертка для центровки последних двух элементов с отступами */}
        <div className="lg:col-span-3 flex justify-center lg:justify-between">
          <div className="flex lg:ml-[209px]">
            <Icon
              icon={Banknote}
              size={100}
              className="w-24 h-24 mr-4 text-red-500 stroke-1"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">Доступність</h3>
              <p className="text-gray-700">
                Ми прагнемо запропонувати конкурентоспроможні ціни без шкоди для
                якості.
              </p>
            </div>
          </div>
          <div className="flex lg:mr-[209px]">
            <Icon
              icon={Speech}
              size={100}
              className="w-24 h-24 mr-4 text-red-500 stroke-1"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Професійна консультація
              </h3>
              <p className="text-gray-700">
                Наші експерти завжди готові надати кваліфіковану допомогу у виборі
                меблів.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

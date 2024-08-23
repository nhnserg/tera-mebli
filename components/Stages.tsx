const Stages = () => {
  return (
    <div className="container mx-auto my-16">
      <h2 className="text-3xl font-bold mb-8">Етапи покупки</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative flex items-center">
          <div className="absolute left-6 text-9xl font-bold text-red-500 opacity-50 ">
            1
          </div>
          <div className="relative ml-16">
            <h3 className="text-xl font-bold text-gray-900">Вибір</h3>
            <p className="text-gray-600">
              У нашому магазині Ви можете знайти будь-які товари для дому або
              скористатись допомогою наших менеджерів
            </p>
          </div>
        </div>
        <div className="relative flex items-center">
          <div className="absolute left-1 text-9xl font-bold text-red-500 opacity-50">
            2
          </div>
          <div className="relative ml-16">
            <h3 className="text-xl font-bold text-gray-900 ">
              Узгодження з менеджером
            </h3>
            <p className="text-gray-600">
              Наші менеджери з радістю підкажуть варіанти доставки і оплати саме
              для вас
            </p>
          </div>
        </div>
        <div className="relative flex items-center">
          <div className="absolute left-1 text-9xl font-bold text-red-500  opacity-50 -ml-1">
            3
          </div>
          <div className="relative ml-16">
            <h3 className="text-xl font-bold text-gray-900 ">Відправка</h3>
            <p className="text-gray-600">
              Після узгодження деталей з доставки і оплати наші працівники
              відправляють товар в умовлений час
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stages;

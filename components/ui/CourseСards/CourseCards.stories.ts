import type { Meta, StoryObj } from '@storybook/vue3';
import CourseCard from '@/components/ui/CourseСards/CourseСards.vue'; // Импортируйте ваш компонент
import IconBook from '@/components/ui/IconBook/IconBook.vue'; 

// Импортируйте изображение
const WolfGoats = require('@/assets/images/wolf-goats.jpg');

// Определите интерфейс для props вашего компонента
interface CourseCardProps {
  wolfGoats: string; // Убедитесь, что здесь указаны все ожидаемые свойства
  iconBook: typeof IconBook; // Например, если вы передаете компонент как пропс
  dotCount: number;
  filledDots: number;
}

const meta: Meta<typeof CourseCard> = {
  title: 'Example/CourseCard', // Название группы историй
  component: CourseCard,
  tags: ['autodocs'], // Автоматическая документация
};

export default meta;

type Story = StoryObj<CourseCardProps>; // Используйте ваш интерфейс

// Создание шаблона для истории
const Template: Story = {
  render: (args) => ({
    components: { CourseCard },
    setup() {
      return { args };
    },
    template: '<CourseCard v-bind="args" />',
  }),
};

// Основная история
export const Default: Story = {
  ...Template,
  args: {
    wolfGoats: WolfGoats, // Теперь используйте имя свойства, соответствующее интерфейсу
    iconBook: IconBook,    // Теперь используйте имя свойства, соответствующее интерфейсу
    dotCount: 6, // Примерное значение для количества точек
    filledDots: 3, // Примерное значение для заполненных точек
  },
};

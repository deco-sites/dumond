import Text from "$store/components/ui/Text.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { useId } from "preact/hooks";

export interface Props {
  alerts: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <div id={id}>
      <div class="bg-badge gap-6 scrollbar-none p-2.5 pt-[12px] text-center md:mt-[15px]">
        {alerts.map((alert) => (
          <Text
            dangerouslySetInnerHTML={{ __html: alert }}
            class="inline-block"
            variant="alerts"
            tone="default-inverse"
          />
        ))}
      </div>

      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;

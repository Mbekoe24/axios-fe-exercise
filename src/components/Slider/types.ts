import { SlideProps } from "components/Slide/types";

export interface ApiResponse extends SlideProps{
  id: string
}

export interface SliderProps {
  data: SlideProps[],
}
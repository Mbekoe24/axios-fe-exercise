export interface SlideProps {
  key: string,
  headline: string,
  name: string,
  sectionLabel: string,
  permaLink: string, 
  publishedDate: string, 
  imageUrl: string
}


export interface SliderProps {
  data: SlideProps[],
}
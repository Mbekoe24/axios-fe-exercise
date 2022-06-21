export interface SlideProps {
  key: string,
  headline: string,
  displayName: string,
  sectionLabel: string,
  permaLink: string, 
  publishedDate: string, 
  primaryImage: string
}


export interface SliderProps {
  data: SlideProps[],
}
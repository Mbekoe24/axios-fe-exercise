export interface ApiResponse extends SlideProps{
  id: string
}
export interface SlideProps {
  headline: string,
  displayName: string,
  sectionLabel: string,
  permaLink: string, 
  publishedDate: string, 
  primaryImage: string
}
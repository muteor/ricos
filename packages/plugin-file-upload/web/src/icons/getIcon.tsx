import xlsIcon from './xlsIcon';
import vidAudIcon from './vid-aud-icon';
import pptIcon from './pptIcon';
import pdfIcon from './pdfIcon';
import otherIcon from './otherIcon';
import imageIcon from './imageIcon';
import folderIcon from './folderIcon';
import docIcon from './docIcon';
import { mapExtensionToType } from '../mapExtensionToType';

const iconMap = {
  image: imageIcon,
  video: vidAudIcon,
  audio: vidAudIcon,
  pdf: pdfIcon,
  'compressed-file': folderIcon,
  'ms-word': docIcon,
  'ms-excel': xlsIcon,
  'ms-powerpoint': pptIcon,
  other: otherIcon,
};

export const getIcon = (extension: string) => {
  return iconMap[mapExtensionToType(extension)];
};

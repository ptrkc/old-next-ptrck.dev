import { PropsWithChildren, ChangeEvent, DragEvent, RefObject, useRef, useState } from 'react';

import { FiUploadCloud, FiTrash2, FiFileText, FiRotateCw } from 'react-icons/fi';
import cn from 'utils/classnames';

const statusIcon = {
  submitting: {
    text: 'Submitting...',
    icon: <FiRotateCw className="w-5 h-5 animate-spin" />,
  },
  added: {
    text: 'Added',
    icon: '✅',
  },
};

interface DropzoneFramePropTypes extends PropsWithChildren {
  isEmpty: boolean;
  inputRef: RefObject<HTMLInputElement>;
  onDrop: Function;
}

const DropzoneFrame = (props: DropzoneFramePropTypes) => {
  const {
    children,
    isEmpty,
    inputRef,
    onDrop: onDropLogic,
  } = props;
  const [isHovering, setIsHovering] = useState(false);

  const stopDefaults = (event: DragEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };
  const onDragEnter = stopDefaults;
  const onDragOver = (event: DragEvent) => {
    stopDefaults(event);
    setIsHovering(true);
  };
  const onDragLeave = (event: DragEvent) => {
    stopDefaults(event);
    setIsHovering(false);
  };
  const onDrop = (event: DragEvent) => {
    stopDefaults(event);
    setIsHovering(false);
    onDropLogic(event);
  };
  const onClick = () => isEmpty && inputRef?.current?.click();

  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions */
    <div
      className={cn(
        'grid grid-cols-1 rounded-md border-neutral-600 border-2 border-dashed hover:border-neutral-200 duration-200 overflow-hidden text-sm relative p-4',
        isHovering && 'bg-neutral-300',
        isEmpty && 'cursor-pointer',
      )}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export interface ProcessedFile {
  name: string;
  content: unknown;
  status?: 'submitting' | 'added';
}

interface DeleteButtonPropTypes {
  name: string;
  selectedFiles: Array<ProcessedFile>;
  setSelectedFiles: Function;
}

const DeleteButton = ({ name, selectedFiles, setSelectedFiles }:DeleteButtonPropTypes) => {
  const removeFile = () => setSelectedFiles(selectedFiles.filter((file) => file.name !== name));
  return (
    <button
      aria-label="Deletar arquivo"
      type="button"
      onClick={removeFile}
      className="btn-icon btn-blue"
    >
      <FiTrash2 className="w-5 h-5" />
    </button>
  );
};

const readFile = (file: File) => new Promise((resolve) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.readAsText(file);
});

interface FileDropzonePropTypes {
  value: Array<ProcessedFile>;
  onChange: Function;
  multiple?: boolean;
  mimeTypes: Array<string>
}

const uniqFileNames = (arr: Array<ProcessedFile>) => (
  Array.from(new Map(arr.map((file) => [file.name, file])).values())
);

const FileDropzone = ({
  value: selectedFiles,
  onChange: setSelectedFiles,
  multiple = false,
  mimeTypes,
} : FileDropzonePropTypes) => {
  const isEmpty = !selectedFiles.length;
  const inputRef = useRef<HTMLInputElement>(null);

  const onDrop = async (event: DragEvent) => {
    if (!multiple && event.dataTransfer.items.length > 1) return;

    const validItems = Array.from(event.dataTransfer.items).filter((item) => item.kind === 'file' && mimeTypes.includes(item.type));
    const newSelectedFiles = await Promise.all(validItems.map(async (item) => {
      const file = item.getAsFile();
      const content = file && await readFile(file);
      return { name: file?.name || '', content };
    }));
    if (!multiple) {
      setSelectedFiles(newSelectedFiles);
      return;
    }
    if (newSelectedFiles) {
      setSelectedFiles(uniqFileNames([...selectedFiles, ...newSelectedFiles]));
    }
  };

  const handleFilePicker = async (event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    const files = input.files || [];
    const validFiles = Array.from(files).filter((file) => mimeTypes.includes(file.type));
    const newSelectedFiles = await Promise.all(validFiles.map(async (file) => {
      const content = await readFile(file);
      return { name: file.name, content };
    }));
    if (!multiple) {
      setSelectedFiles(newSelectedFiles);
      return;
    }
    setSelectedFiles(uniqFileNames([...selectedFiles, ...newSelectedFiles]));
  };

  return (
    <DropzoneFrame
      onDrop={onDrop}
      inputRef={inputRef}
      isEmpty={isEmpty}
    >
      {isEmpty ? (
        <div className="rounded-md bg-neutral-200 p-2 mx-auto">
          <FiUploadCloud className="w-5 h-5" />
        </div>
      ) : (
        <ul className="w-full spacing-2">
          {selectedFiles.map(({ name, status }) => (
            <li key={name} className="gap-2">
              <div className="rounded-frame bg-white flex m-1 p-2 justify-between items-center">
                <div className="flex justify-center items-center gap-2">
                  <FiFileText className="w-5 h-5" />
                  <p>{name}</p>
                </div>
                {status ? (
                  <p className="btn-icon" title={statusIcon[status].text}>
                    {statusIcon[status].icon}
                  </p>
                ) : (
                  <DeleteButton
                    name={name}
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
      <button type="button" className="pt-2" onClick={() => inputRef?.current?.click()}>
        <span className="text-blue-400 font-bold hover:text-blue-500 duration-150">
          Click to select
        </span>
        {' '}
        or drop your file
        {multiple && 's'}
      </button>
      <input
        onChange={handleFilePicker}
        type="file"
        ref={inputRef}
        multiple={multiple}
        hidden
      />
    </DropzoneFrame>
  );
};

export default FileDropzone;

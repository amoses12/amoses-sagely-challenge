import React from 'react';
import { Descriptions } from 'antd';
import { useSelector } from 'react-redux';

const LessonCard = () => {
  const selectedLesson = useSelector((state) => state.lessons.selectedLesson);

  return (
    <div>
      <Descriptions
        title={selectedLesson.title}
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Author">
          {selectedLesson.author}
        </Descriptions.Item>
        <Descriptions.Item label="URL">
          <a href={selectedLesson.url}>{selectedLesson.url}</a>
        </Descriptions.Item>
        <Descriptions.Item label="Tags">
          {selectedLesson.manualTags}
        </Descriptions.Item>
        <Descriptions.Item label="Date">
          {selectedLesson.date}
        </Descriptions.Item>
        <Descriptions.Item label="Date Added">
          {selectedLesson.dateAdded}
        </Descriptions.Item>
        <Descriptions.Item label="publication Year">
          {selectedLesson.publicationYear}
        </Descriptions.Item>
        <Descriptions.Item label="Key">{selectedLesson.key}</Descriptions.Item>
        <Descriptions.Item label="Item Type">
          {selectedLesson.itemType}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default LessonCard;

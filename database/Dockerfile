FROM mongo
COPY seed.json /seed.json
CMD mongoimport --host database --db photoGalleryDB --collection photos --type json --file /seed.json --jsonArray
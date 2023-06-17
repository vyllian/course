package com.nevil.Nevil.accessories;


import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public interface AccessoriesRepository extends MongoRepository<Accessories, ObjectId> {
    List<Accessories> findAccessoriesByTypeAndColorsContaining(String type, ArrayList<String> colors);
    List<Accessories> findAccessoriesByType(String type);

}

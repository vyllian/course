package com.nevil.Nevil.clothes;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClothesRepository extends MongoRepository<Clothes, ObjectId> {
    List<Clothes> findClothesByCategory(String category);
    List<Clothes> findClothesByType(String type);

}

package com.nevil.Nevil.outfits;


import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OutfitRepository extends MongoRepository<Outfit, ObjectId> {
    Optional<Outfit> findOutfitByImage(String image);
}
